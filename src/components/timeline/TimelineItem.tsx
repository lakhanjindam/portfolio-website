import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import TimelineDot from './TimelineDot';
import { cn } from '../../utils/cn';
import HighlightedText from '../ui/HighlightedText';
import { TwilioLogo } from './twilioLogo';
import { BrowserStackLogo } from './browserstackLogo';
import { TalkdeskLogo } from './talkdeskLogo';

interface TimelineItemProps {
  duration: string;
  title: string;
  company: string;
  description: string;
  index: number;
  progress: MotionValue<number>;
  total: number;
  companyURL: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  duration,
  title,
  company,
  description,
  index,
  progress,
  total,
  companyURL
}) => {
  const isEven = index % 2 === 0;
  
  const threshold = index / total;
  const nextThreshold = (index + 1) / total;
  
  const itemProgress = useTransform(
    progress,
    [threshold, nextThreshold],
    [0, 1]
  );

  return (
    <div className="relative py-8 sm:py-16">
      <div className="absolute left-[-6px] sm:left-1/2 top-1/2 -translate-y-1/2 sm:-translate-x-1/2">
        <TimelineDot progress={itemProgress} index={index} isEven={isEven} />
      </div>
      
      <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_100px_1fr] items-center pl-8 sm:pl-0">
        <motion.div
          className={cn(
            "space-y-2 sm:px-8",
            !isEven && "sm:col-start-3",
            "bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50",
            isEven ? "sm:text-right" : "sm:text-left"
          )}
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          style={{
            opacity: useTransform(itemProgress, [0, 0.5], [0.3, 1]),
            x: useTransform(itemProgress, [0, 1], [isEven ? -20 : 20, 0])
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span className="text-emerald-400 font-medium block text-sm sm:text-base">{duration}</span>
          <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
          <div className="flex items-center gap-2">
            <HighlightedText text={company} link={companyURL} />
            {company?.toLowerCase().includes('twilio') && (
              <div className="overflow-hidden rounded-full w-8 h-8">
                <TwilioLogo className="w-8 h-8" />
              </div>
            )}
            {company?.toLowerCase().includes('browserstack') && (
              <div className="overflow-hidden rounded-full w-8 h-8">
                <BrowserStackLogo className="w-8 h-8" />
              </div>
            )}
            {company?.toLowerCase().includes('talkdesk') && (
              <div className="overflow-hidden rounded-full w-8 h-8">
                <TalkdeskLogo className="w-8 h-8" />
              </div>
            )}
          </div>
          <ul className="text-gray-400 text-sm sm:text-base space-y-2">
            {description.split('\n').map((line, idx) => (
              <li key={idx} className="flex items-start gap-2 p-2 hover:bg-gray-800 transition-colors text-left">
                <span className="text-emerald-400">➜</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <div className="w-full h-full hidden sm:block" />
        
        {isEven && <div className="hidden sm:block" />}
      </div>
    </div>
  );
};

export default TimelineItem;
