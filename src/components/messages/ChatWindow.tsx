
import { Send, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";

interface ChatMessage {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isUser: boolean;
}

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  read: boolean;
}

interface ChatWindowProps {
  selectedChat: number | null;
  messages: Message[];
  chatMessages: ChatMessage[];
  newMessage: string;
  onNewMessageChange: (value: string) => void;
  onSendMessage: () => void;
}

export const ChatWindow = ({
  selectedChat,
  messages,
  chatMessages,
  newMessage,
  onNewMessageChange,
  onSendMessage,
}: ChatWindowProps) => {
  const selectedMessage = messages.find(m => m.id === selectedChat);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Här kan vi hantera filuppladdningen
      console.log("Files selected:", e.target.files);
    }
  };

  return (
    <Card className="h-[calc(100vh-12rem)] flex flex-col glass-card">
      <CardHeader className="border-b border-white/10">
        <CardTitle className="text-xl font-semibold text-gray-300">
          {selectedMessage?.sender}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatMessages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                msg.isUser
                  ? 'bg-[#007AFF] text-white rounded-br-none'
                  : 'glass-card text-gray-300 rounded-bl-none'
              }`}
            >
              <p className="text-sm">{msg.content}</p>
              <span className={`text-xs mt-1 block ${
                msg.isUser ? 'text-blue-100' : 'text-gray-400'
              }`}>
                {msg.timestamp}
              </span>
            </div>
          </motion.div>
        ))}
      </CardContent>
      <div className="p-4 border-t border-white/10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSendMessage();
          }}
          className="flex flex-col gap-2"
        >
          <div className="flex gap-2">
            <Textarea
              value={newMessage}
              onChange={(e) => onNewMessageChange(e.target.value)}
              placeholder="Skriv ett meddelande..."
              className="min-h-[50px] max-h-[100px] resize-none glass-card text-gray-300 placeholder:text-gray-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  onSendMessage();
                }
              }}
            />
            <div className="flex flex-col gap-2">
              <Input
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label 
                htmlFor="file-upload" 
                className="cursor-pointer bg-black/20 hover:bg-black/30 text-white p-2 rounded-md transition-colors"
              >
                <Paperclip className="h-5 w-5" />
              </label>
              <Button type="submit" className="bg-[#007AFF] hover:bg-[#0063CC]">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};
