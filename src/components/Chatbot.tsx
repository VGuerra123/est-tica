import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const SUPPORT_WHATSAPP_NUMBER = "+56912345678"; // Cambia por número real

// Respuestas simples ejemplo: clave (texto a buscar) => respuesta
const predefinedAnswers: { [key: string]: string } = {
  hola: "¡Hola! 😊 ¿En qué puedo ayudarte hoy?",
  precio: "Nuestros precios varían según el servicio. ¿Quieres que te envíe el catálogo?",
  horario: "Nuestro horario es de lunes a viernes, de 9am a 7pm.",
  reserva: "Puedes reservar directamente desde la página de reservas. ¿Quieres que te ayude con eso?",
  gracias: "¡De nada! Estoy aquí para ayudarte.",
};

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { text: string; role: "user" | "bot" }[]
  >([{ text: predefinedAnswers["hola"], role: "bot" }]);
  const [isWaiting, setIsWaiting] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll al nuevo mensaje
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Función para enviar mensajes
  const sendMessage = () => {
    const value = inputRef.current?.value.trim();
    if (!value) return;

    // Agregar mensaje del usuario
    setMessages((m) => [...m, { text: value, role: "user" }]);
    if (inputRef.current) inputRef.current.value = "";
    setIsWaiting(true);

    // Respuesta simulada con lógica simple
    setTimeout(() => {
      // Buscar si alguna palabra clave está en el mensaje del usuario
      const lowerValue = value.toLowerCase();
      let matchedAnswer = "";

      for (const key in predefinedAnswers) {
        if (lowerValue.includes(key)) {
          matchedAnswer = predefinedAnswers[key];
          break;
        }
      }

      if (matchedAnswer) {
        // Respuesta encontrada
        setMessages((m) => [
          ...m,
          { text: matchedAnswer, role: "bot" },
        ]);
      } else {
        // No encontró respuesta: sugerir WhatsApp
        setMessages((m) => [
          ...m,
          {
            text: `Lo siento, no entiendo esa pregunta. Puedes contactarnos directamente en WhatsApp para soporte personalizado.`,
            role: "bot",
          },
        ]);
      }
      setIsWaiting(false);
    }, 800);
  };

  // Abrir WhatsApp en ventana nueva
  const openWhatsApp = () => {
    window.open(`https://wa.me/${SUPPORT_WHATSAPP_NUMBER.replace(/\D/g, "")}`, "_blank");
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir chatbot"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#D8A7B1] to-[#8C6D62] text-white shadow-2xl shadow-black/40 transition hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D8A7B1]/40"
      >
        <MessageCircle className="h-7 w-7" />
      </button>

      {/* Ventana chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="fixed bottom-28 right-6 z-50 flex h-[460px] w-[340px] flex-col overflow-hidden rounded-3xl border border-white/15 bg-gray-900/90 backdrop-blur-md shadow-lg"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[#8C6D62] to-[#D8A7B1] px-5 py-3">
              <h3 className="font-semibold text-white">Asistente</h3>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar chatbot"
                className="rounded-full p-1 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm text-white/90 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] rounded-lg px-4 py-2 whitespace-pre-line ${
                    m.role === "user"
                      ? "ml-auto bg-white/20 text-black"
                      : "mr-auto bg-[#8C6D62]/60 text-white"
                  }`}
                >
                  {m.text}

                  {/* Mostrar botón WhatsApp en mensaje de no entendimiento */}
                  {m.role === "bot" &&
                    m.text.includes("WhatsApp") && (
                      <button
                        onClick={openWhatsApp}
                        className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#20b858] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
                        aria-label="Contactar soporte por WhatsApp"
                      >
                        Contactar Soporte <Send className="w-4 h-4" />
                      </button>
                    )}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-white/10 bg-gray-950/80 p-3">
              <input
                ref={inputRef}
                type="text"
                placeholder="Escribe un mensaje..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 rounded-lg border border-white/20 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder-white/50 focus:border-[#D8A7B1]"
                disabled={isWaiting}
                aria-label="Campo de texto para mensaje"
              />
              <button
                onClick={sendMessage}
                disabled={isWaiting}
                className={`rounded-xl bg-gradient-to-br from-[#D8A7B1] to-[#8C6D62] px-4 py-2 text-sm font-semibold shadow transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8A7B1]/50 disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label="Enviar mensaje"
              >
                Enviar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
