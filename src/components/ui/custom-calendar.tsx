import { useState } from "react";
import { Button } from "./button";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomCalendarProps {
  value: string;
  onChange: (date: string) => void;
  placeholder?: string;
  className?: string;
}

export const CustomCalendar = ({ value, onChange, placeholder = "Pick a date", className }: CustomCalendarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(() => {
    if (value) {
      const date = new Date(value);
      return date.getMonth();
    }
    return new Date().getMonth();
  });
  const [currentYear, setCurrentYear] = useState(() => {
    if (value) {
      const date = new Date(value);
      return date.getFullYear();
    }
    return new Date().getFullYear();
  });

  const selectedDate = value ? new Date(value) : null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const isPastDate = (date: Date) => {
    return date < today;
  };

  const handleDateSelect = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    if (!isPastDate(date)) {
      onChange(date.toISOString().split('T')[0]);
      setIsOpen(false);
    }
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const handleToday = () => {
    onChange(today.toISOString().split('T')[0]);
    setIsOpen(false);
  };

  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return placeholder;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const renderCalendarDays = () => {
    const days = [];
    const totalDays = daysInMonth(currentMonth, currentYear);
    const firstDay = firstDayOfMonth(currentMonth, currentYear);

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-8 w-8" />
      );
    }

    // Add days of the month
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isDisabled = isPastDate(date);
      const isTodayDate = isToday(date);
      const isSelectedDate = isSelected(date);

      days.push(
        <Button
          key={day}
          type="button"
          variant="ghost"
          size="sm"
          className={cn(
            "h-8 w-8 p-0 text-sm font-normal",
            isTodayDate && "bg-secondary/20 text-secondary font-semibold",
            isSelectedDate && "bg-secondary text-secondary-foreground hover:bg-secondary",
            isDisabled && "text-muted-foreground cursor-not-allowed opacity-50"
          )}
          onClick={() => handleDateSelect(day)}
          disabled={isDisabled}
        >
          {day}
        </Button>
      );
    }

    return days;
  };

  return (
    <div className={cn("relative", className)}>
      <Button
        type="button"
        variant="outline"
        className="w-full justify-start text-left font-normal"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Calendar className="mr-2 h-4 w-4" />
        {formatDisplayDate(value)}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-border rounded-lg shadow-lg p-4 min-w-[280px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => navigateMonth('prev')}
                className="h-6 w-6 p-0"
              >
                <ChevronLeft className="h-3 w-3" />
              </Button>
              <h3 className="font-semibold text-sm min-w-[120px] text-center">
                {monthNames[currentMonth]} {currentYear}
              </h3>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => navigateMonth('next')}
                className="h-6 w-6 p-0"
              >
                <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleToday}
              className="text-xs"
            >
              Today
            </Button>
          </div>

          {/* Days of week header */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
              <div key={day} className="h-8 flex items-center justify-center text-xs text-muted-foreground font-medium">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {renderCalendarDays()}
          </div>

          {/* Footer */}
          <div className="flex justify-between mt-4 pt-3 border-t">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                onChange('');
                setIsOpen(false);
              }}
              className="text-xs"
            >
              Clear
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
