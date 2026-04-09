import React, { useState } from 'react';
import HeroImage from './HeroImage';
import MonthGrid from './MonthGrid';
import NotesPanel from './NotesPanel';
import './CalendarComponent.css';

const CalendarComponent = ({ theme }) => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  
  const [startDate, setStartDate] = useState(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  });

<<<<<<< HEAD
  const [endDate, setEndDate] = useState(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  });

  const [hoverDate, setHoverDate] = useState(null);

=======
>>>>>>> 8ec1ebdb1f9d86fa94cf2dba00c484e9f22cfcbc
  const [flipDirection, setFlipDirection] = useState('none');

  const handlePrevMonth = () => {
    setFlipDirection('prev');
    setTimeout(() => {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
      setTimeout(() => setFlipDirection('none'), 300);
    }, 150);
  };

  const handleNextMonth = () => {
    setFlipDirection('next');
    setTimeout(() => {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
      setTimeout(() => setFlipDirection('none'), 300);
    }, 150);
  };

  return (
    <div className="wall-calendar">
      <div className="calendar-content">
        <HeroImage theme={theme} currentMonth={currentMonth} currentYear={currentYear} />
        
        <div className="calendar-body">
          <div className="calendar-body-left">
            <NotesPanel 
              currentMonth={currentMonth}
              currentYear={currentYear}
<<<<<<< HEAD
              selectedDate={startDate}
            />
          </div>
          <div className="calendar-body-right">
              <MonthGrid 
                currentMonth={currentMonth}
                currentYear={currentYear}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                hoverDate={hoverDate}
                setHoverDate={setHoverDate}
                onPrevMonth={handlePrevMonth}
                onNextMonth={handleNextMonth}
                flipDirection={flipDirection}
              />
=======
            />
          </div>
          <div className="calendar-body-right">
            <MonthGrid 
              currentMonth={currentMonth}
              currentYear={currentYear}
              startDate={startDate}
              setStartDate={setStartDate}
              onPrevMonth={handlePrevMonth}
              onNextMonth={handleNextMonth}
              flipDirection={flipDirection}
            />
>>>>>>> 8ec1ebdb1f9d86fa94cf2dba00c484e9f22cfcbc
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
