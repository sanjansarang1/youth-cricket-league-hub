import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AiChat = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-primary">YCPL AI Assistant</h1>
          </div>
          
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700">
              YCPL has developed a specialized Cricket AI assistant that provides:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Live cricket scores and match updates</li>
              <li>Detailed player and team statistics</li>
              <li>Beginner-friendly cricket explanations</li>
              <li>Tournament rules and guidelines</li>
              <li>Training tips and best practices</li>
            </ul>
          </div>

          <div className="bg-accent/50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary">Access YCPL AI</h2>
            <p className="text-gray-600 mb-4">
              Our AI assistant is available through ChatGPT. Click the button below to start chatting with YCPL AI and get instant cricket-related assistance.
            </p>
            <a
              href="https://chatgpt.com/g/g-679ecc24ef8881919ecc4f43d2822ff7-ycpl-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2">
                <MessageSquare className="h-4 w-4" />
                Chat with YCPL AI
              </Button>
            </a>
          </div>

          <div className="text-sm text-gray-500">
            <p>
              Note: You will need a ChatGPT account to access YCPL AI. The assistant
              will open in a new tab while keeping this website accessible.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AiChat;