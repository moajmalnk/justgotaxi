import { useState } from "react";
import { Button } from "./button";
import { Clock, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimePickerProps {
  value: string;
  onChange: (time: string) => void;
  placeholder?: string;
  className?: string;
}

export const CustomTimePicker = ({ value, onChange, placeholder = "Select time", className }: TimePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Parse current time or default to current time
  const [hours, setHours] = useState(() => {
    if (value) {
      const [h] = value.split(':');
      return parseInt(h);
    }
    return new Date().getHours();
  });
  
  const [minutes, setMinutes] = useState(() => {
    if (value) {
      const [, m] = value.split(':');
      return parseInt(m || '0');
    }
    return 0;
  });
  
  const [period, setPeriod] = useState<'AM' | 'PM'>(() => {
    if (value) {
      const [h] = value.split(':');
      return parseInt(h) >= 12 ? 'PM' : 'AM';
    }
    return new Date().getHours() >= 12 ? 'PM' : 'AM';
  });

  const formatTime = (h: number, m: number, p: 'AM' | 'PM') => {
    const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
    const minuteStr = m.toString().padStart(2, '0');
    return `${hour12}:${minuteStr} ${p}`;
  };

  const formatTime24 = (h: number, m: number, p: 'AM' | 'PM') => {
    let hour24 = h;
    if (p === 'AM' && h === 12) hour24 = 0;
    if (p === 'PM' && h !== 12) hour24 = h + 12;
    
    const hourStr = hour24.toString().padStart(2, '0');
    const minuteStr = m.toString().padStart(2, '0');
    return `${hourStr}:${minuteStr}`;
  };

  const handleSetTime = () => {
    const time24 = formatTime24(hours, minutes, period);
    onChange(time24);
    setIsOpen(false);
  };

  const handleNow = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const p = h >= 12 ? 'PM' : 'AM';
    
    setHours(h === 0 ? 12 : h > 12 ? h - 12 : h);
    setMinutes(m);
    setPeriod(p);
    
    const time24 = formatTime24(h === 0 ? 12 : h > 12 ? h - 12 : h, m, p);
    onChange(time24);
    setIsOpen(false);
  };

  const increment = (type: 'hours' | 'minutes') => {
    if (type === 'hours') {
      const newHours = hours === 12 ? 1 : hours + 1;
      setHours(newHours);
    } else {
      const newMinutes = minutes === 59 ? 0 : minutes + 1;
      setMinutes(newMinutes);
    }
  };

  const decrement = (type: 'hours' | 'minutes') => {
    if (type === 'hours') {
      const newHours = hours === 1 ? 12 : hours - 1;
      setHours(newHours);
    } else {
      const newMinutes = minutes === 0 ? 59 : minutes - 1;
      setMinutes(newMinutes);
    }
  };

  return (
    <div className={cn("relative", className)}>
      <Button
        type="button"
        variant="outline"
        className="w-full justify-start text-left font-normal"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Clock className="mr-2 h-4 w-4" />
        {value ? formatTime(hours, minutes, period) : placeholder}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-border rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm">Select Time</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleNow}
              className="text-xs"
            >
              <Clock className="h-3 w-3 mr-1" />
              Now
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-4">
            {/* Hours */}
            <div className="text-center">
              <label className="text-xs text-muted-foreground mb-2 block">Hour</label>
              <div className="flex flex-col items-center space-y-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => increment('hours')}
                  className="h-6 w-6 p-0"
                >
                  <ChevronUp className="h-3 w-3" />
                </Button>
                <div className="w-12 h-8 flex items-center justify-center bg-muted rounded text-sm font-mono">
                  {hours}
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => decrement('hours')}
                  className="h-6 w-6 p-0"
                >
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="text-2xl text-muted-foreground">:</div>

            {/* Minutes */}
            <div className="text-center">
              <label className="text-xs text-muted-foreground mb-2 block">Minute</label>
              <div className="flex flex-col items-center space-y-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => increment('minutes')}
                  className="h-6 w-6 p-0"
                >
                  <ChevronUp className="h-3 w-3" />
                </Button>
                <div className="w-12 h-8 flex items-center justify-center bg-muted rounded text-sm font-mono">
                  {minutes.toString().padStart(2, '0')}
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => decrement('minutes')}
                  className="h-6 w-6 p-0"
                >
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Period */}
            <div className="text-center">
              <label className="text-xs text-muted-foreground mb-2 block">Period</label>
              <div className="space-y-1">
                <Button
                  type="button"
                  variant={period === 'AM' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setPeriod('AM')}
                  className="w-12 h-8 text-xs"
                >
                  AM
                </Button>
                <Button
                  type="button"
                  variant={period === 'PM' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setPeriod('PM')}
                  className="w-12 h-8 text-xs"
                >
                  PM
                </Button>
              </div>
            </div>
          </div>

          <Button
            type="button"
            onClick={handleSetTime}
            className="w-full"
            size="sm"
          >
            Set Time
          </Button>
        </div>
      )}
    </div>
  );
};
