import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ChannelSidebar } from "@/components/ChannelSidebar";
import { ChannelContent } from "@/components/ChannelContent";
import { useState } from "react";
import { Channel } from "@/types/channel";
import { Navbar } from "@/components/Navbar";

const Channels = () => {
  const [activeChannel, setActiveChannel] = useState<Channel | null>(null);

  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-64px)] bg-background pt-16">
        <ChannelSidebar onChannelSelect={setActiveChannel} activeChannel={activeChannel} />
        <ChannelContent activeChannel={activeChannel} />
      </div>
    </>
  );
};

export default Channels;