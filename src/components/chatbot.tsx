import { Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import blackbirdLogo from "../../blackbird.svg";

type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
};

const WEBHOOK_URL = "https://n8n.theblackbird.one/webhook/9269ca42-f049-499d-b584-4fb8a7c7404b";
const WELCOME_TEXT = "Hey there! 👋 I'm Blackbird — how can I help you grow your business today?";

function extractResponseText(rawBody: string) {
  if (!rawBody) return "";

  try {
    const json = JSON.parse(rawBody);
    if (json == null) return rawBody;
    if (typeof json === "string") return json;
    if (typeof json.output === "string") return json.output;
    if (Array.isArray(json.output) && json.output.length) return String(json.output[0]);
    if (typeof json.message === "string") return json.message;
    if (typeof json.text === "string") return json.text;
    if (typeof json.reply === "string") return json.reply;
    if (typeof json.data === "string") return json.data;
    if (Array.isArray(json.answers) && json.answers.length) return String(json.answers[0]);
    return JSON.stringify(json);
  } catch {
    return rawBody;
  }
}

function generateSessionId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `bb-${Math.random().toString(36).slice(2, 10)}-${Date.now()}`;
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "bot", text: WELCOME_TEXT },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string>("");
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let id = window.localStorage.getItem("blackbird-chat-session");
    if (!id) {
      id = generateSessionId();
      window.localStorage.setItem("blackbird-chat-session", id);
    }
    setSessionId(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const frame = chatRef.current;
    if (!frame) return;
    frame.scrollTo({ top: frame.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const text = input.trim();
    setInput("");
    setError(null);
    setMessages((prev) => [...prev, { id: `user-${Date.now()}`, role: "user", text }]);
    setLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, message: text, query: text, sessionId }),
      });

      const rawBody = await response.text();
      const botText = extractResponseText(rawBody);

      if (!response.ok) {
        throw new Error(botText || response.statusText || "Chat service error");
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: "bot",
          text: botText || "Sorry, I couldn't get a response from the chat service.",
        },
      ]);
    } catch (err) {
      console.error(err);
      setError("The chat service is temporarily unavailable. Please try again later.");
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: "bot",
          text: "Sorry, the chatbot is unavailable right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <style>{`
        .bb-chat-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .bb-chat-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .bb-chat-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }
        .bb-chat-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        .bb-chat-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .bb-message {
          animation: slideUp 0.3s ease-out;
        }
        .bb-chat-popup {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (max-width: 480px) {
          .bb-chat-popup {
            right: 0 !important;
            left: 0 !important;
            margin: 1rem;
            width: auto !important;
            max-height: 70vh !important;
          }
        }
      `}</style>
      {open && (
        <div className="bb-chat-popup fixed bottom-28 right-6 z-[99999] w-[min(420px,calc(100%-2rem))] max-h-[calc(100vh-200px)] min-h-[280px] rounded-[28px] border border-white/10 bg-[#0b0d10]/95 shadow-[0_40px_90px_rgba(0,0,0,0.36)] backdrop-blur-2xl text-white flex flex-col">
          <div className="flex items-center justify-between rounded-t-[28px] border-b border-white/10 bg-[#0b0d10]/95 px-4 py-4 text-sm font-semibold flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 text-black">
                <img src={blackbirdLogo} alt="Blackbird" className="h-5 w-5 object-contain" />
              </div>
              <div>
                <div>Blackbird</div>
                <div className="text-xs text-neutral-400">Instant AI assistant</div>
              </div>
            </div>
            <button
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 active:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex flex-col overflow-hidden flex-1 min-h-0">
            <div className="px-4 pt-4 pb-3 flex-shrink-0">
              <div className="rounded-3xl bg-white/5 p-3 text-xs text-neutral-400">
                <span className="font-medium text-white">Ask anything about your website growth plan.</span> Responses are powered by Blackbird's AI assistant.
              </div>
            </div>
            <div ref={chatRef} className="bb-chat-scroll flex-1 min-h-0 space-y-3 overflow-y-auto px-4 pb-2 text-sm">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex bb-message ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`inline-block max-w-[85%] ${
                      message.role === "user"
                        ? "rounded-[20px] rounded-tr-[4px] bg-cyan-400 text-black"
                        : "rounded-[20px] rounded-tl-[4px] bg-white/10 text-white"
                    } px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.12)]`}
                  >
                    <p className="whitespace-pre-wrap break-words text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
            {error ? (
              <div className="px-4 py-2 flex-shrink-0">
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs text-red-200 animate-in fade-in">{error}</div>
              </div>
            ) : null}
            <div className="flex-shrink-0 px-4 py-3 flex items-end gap-2 border-t border-white/5">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Ask me anything..."
                className="min-h-[44px] max-h-[100px] flex-1 resize-none rounded-[20px] border border-white/10 bg-[#11141c] px-3.5 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-all"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={!input.trim() || loading || !sessionId}
                className="flex-shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-[18px] bg-cyan-400 text-black transition active:scale-95 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-cyan-400"
              >
                {loading ? <div className="h-1 w-1 rounded-full bg-black animate-pulse" /> : <Send className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-[99999] flex h-[68px] w-[68px] items-center justify-center pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-cyan-400/25 animate-ping" />
        <button
          type="button"
          onClick={() => setOpen((state) => !state)}
          aria-label="Chat with Blackbird"
          className="pointer-events-auto relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-cyan-400 text-black shadow-[0_20px_60px_rgba(31,209,194,0.35)] transition hover:scale-[1.05] hover:bg-cyan-300"
        >
          <img src={blackbirdLogo} alt="Blackbird" className="h-7 w-7 object-contain" />
        </button>
      </div>
    </>
  );
}
