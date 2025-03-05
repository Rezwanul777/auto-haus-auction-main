import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  read: boolean;
}

interface MessageListProps {
  messages: Message[];
  selectedChat: number | null;
  onSelectChat: (id: number) => void;
}

export const MessageList = ({ messages, selectedChat, onSelectChat }: MessageListProps) => {
  return (
    <div className="space-y-2 p-2">
      {messages.map((message, index) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card 
            className={`hover:shadow-md transition-all cursor-pointer glass-card ${
              !message.read ? 'border-l-4 border-l-[#007AFF]' : ''
            } ${
              selectedChat === message.id 
                ? 'bg-white/10' 
                : 'hover:bg-white/5'
            }`}
            onClick={() => onSelectChat(message.id)}
          >
            <CardContent className="p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-sm text-gray-300">{message.sender}</h3>
                  <p className="text-gray-400 text-sm mt-1 line-clamp-2">{message.content}</p>
                </div>
                <span className="text-xs text-blue-400 whitespace-nowrap">{message.timestamp}</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};