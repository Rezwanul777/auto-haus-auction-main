interface Timeline {
  ordered: string;
  sent: string;
  delivered: string;
}

interface TrackingProps {
  status: string;
  timeline: Timeline;
}

export const CarTrackingInfo = ({ status, timeline }: TrackingProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-white/60">
        <div>Beställd: {timeline.ordered}</div>
        <div>Skickad: {timeline.sent}</div>
        <div>Levererad: {timeline.delivered}</div>
      </div>
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-blue-500 rounded-full" 
          style={{ 
            width: status === 'Delivered' ? '100%' : 
                   status === 'Sent' ? '66%' : '33%' 
          }} 
        />
      </div>
    </div>
  );
};