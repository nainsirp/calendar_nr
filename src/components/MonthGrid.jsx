import React from 'react';
import './CalendarComponent.css';

const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

<<<<<<< HEAD
const HOLIDAYS = {
  // Global & US Holidays
  '0-1': "New Year's Day",
  '1-14': "Valentine's Day",
  '2-17': "St. Patrick's Day",
  '3-1': "April Fools' Day",
  '4-1': "May Day",
  '6-4': "Independence Day",
  '9-31': "Halloween",
  '10-11': "Veterans Day",
  '11-25': "Christmas",
  '11-31': "New Year's Eve",
  
  // Global Cultural Events
  '0-29': "Lunar New Year",
  '1-17': "Rio Carnival",
  '7-28': "La Tomatina", 
  '8-21': "Oktoberfest Starts", 
  '10-1': "Día de los Muertos", 
  
  // Major Hindu Festivals (Using exact 2026 Dates)
  '0-14': "Makar Sankranti",    // Jan 14
  '1-15': "Maha Shivaratri",    // Feb 15
  '2-4': "Holi",                // Mar 4
  '8-4': "Krishna Janmashtami", // Sep 4
  '8-14': "Ganesh Chaturthi",   // Sep 14
  '9-20': "Dussehra",           // Oct 20
  '10-8': "Diwali"              // Nov 8
};

=======
>>>>>>> 8ec1ebdb1f9d86fa94cf2dba00c484e9f22cfcbc
const MonthGrid = ({
  currentMonth,
  currentYear,
  startDate,
  setStartDate,
<<<<<<< HEAD
  endDate,
  setEndDate,
  hoverDate,
  setHoverDate,
=======
>>>>>>> 8ec1ebdb1f9d86fa94cf2dba00c484e9f22cfcbc
  onPrevMonth,
  onNextMonth,
  flipDirection
}) => {

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handleDateClick = (day) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    clickedDate.setHours(0,0,0,0);
    
<<<<<<< HEAD
    if (startDate && !endDate) {
      if (clickedDate.getTime() < startDate.getTime()) {
        setEndDate(startDate);
        setStartDate(clickedDate);
      } else if (clickedDate.getTime() === startDate.getTime()) {
        setEndDate(clickedDate);
      } else {
        setEndDate(clickedDate);
      }
    } else {
      setStartDate(clickedDate);
      setEndDate(null);
    }
  };

  const handleDateHover = (day) => {
    if (startDate && !endDate && day) {
      const hover = new Date(currentYear, currentMonth, day);
      hover.setHours(0,0,0,0);
      setHoverDate(hover);
    } else if (!day) {
      setHoverDate(null);
    }
=======
    // Toggle single selection off if clicked again, otherwise select it
    if (startDate && startDate.getTime() === clickedDate.getTime()) {
      setStartDate(null);
    } else {
      setStartDate(clickedDate);
    }
  };

  const isSelected = (day) => {
    if (!day || !startDate) return false;
    return new Date(currentYear, currentMonth, day).getTime() === startDate.getTime();
>>>>>>> 8ec1ebdb1f9d86fa94cf2dba00c484e9f22cfcbc
  };

  const renderDays = () => {
    const totalDays = getDaysInMonth(currentYear, currentMonth);
    const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);
    const prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1);

    let days = [];

    // Prev month padding
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="date-cell prev-month">
<<<<<<< HEAD
          <span className="date-num">{prevMonthDays - i}</span>
=======
          {prevMonthDays - i}
>>>>>>> 8ec1ebdb1f9d86fa94cf2dba00c484e9f22cfcbc
        </div>
      );
    }

    // Current month days
    for (let i = 1; i <= totalDays; i++) {
<<<<<<< HEAD
        const currentDate = new Date(currentYear, currentMonth, i);
        currentDate.setHours(0,0,0,0);
        const t = currentDate.getTime();
        
        let className = "date-cell current-month";

        const st = startDate ? startDate.getTime() : null;
        const et = endDate ? endDate.getTime() : null;
        const ht = hoverDate ? hoverDate.getTime() : null;

        let isStart = st === t;
        let isEnd = et === t;
        
        let visualStart = st === t;
        let visualEnd = et === t;
        let isHover = false;

        if (st && et && t > st && t < et) {
            className += " in-range";
        }

        // Preview hover
        if (st && !et && ht) {
             const minT = Math.min(st, ht);
             const maxT = Math.max(st, ht);
             if (t > minT && t < maxT) {
                 className += " hover-range";
             } else if (t === ht && t !== st) {
                 className += " selected hover-end";
             }
             
             if (t === minT) visualStart = true;
             if (t === maxT) visualEnd = true;
             if (st !== ht) isHover = true;
        }

        if (visualStart) className += " range-start";
        if (visualEnd) className += " range-end";
        if (isHover) className += " is-hover";

        if (isStart) className += " selected start-date";
        if (isEnd) className += " selected end-date";
        if ((isStart && isEnd) || (st && !et && st === t && ht === st) || (st && !et && !ht)) {
             className += " single-date";
        }

        const holidayName = HOLIDAYS[`${currentMonth}-${i}`];
=======
        let className = "date-cell current-month";
        if (isSelected(i)) className += " selected";
>>>>>>> 8ec1ebdb1f9d86fa94cf2dba00c484e9f22cfcbc

        days.push(
            <div 
              key={`current-${i}`} 
              className={className}
              onClick={() => handleDateClick(i)}
<<<<<<< HEAD
              onMouseEnter={() => handleDateHover(i)}
              title={holidayName || ""}
            >
              <span className="date-num">{i}</span>
              {holidayName && <div className="holiday-dot" />}
=======
            >
              <span className="date-num">{i}</span>
>>>>>>> 8ec1ebdb1f9d86fa94cf2dba00c484e9f22cfcbc
            </div>
        );
    }

    // Next month padding to fill grid
    const totalCells = Math.ceil((totalDays + firstDayIndex) / 7) * 7;
    const currentCells = days.length;
    for (let i = 1; i <= totalCells - currentCells; i++) {
       days.push(
        <div key={`next-${i}`} className="date-cell next-month">
<<<<<<< HEAD
          <span className="date-num">{i}</span>
=======
          {i}
>>>>>>> 8ec1ebdb1f9d86fa94cf2dba00c484e9f22cfcbc
        </div>
      );
    }

    return days;
  };

  return (
    <div className={`month-grid-container flip-${flipDirection}`}>
      <div className="calendar-controls">
        <button className="nav-btn" onClick={onPrevMonth} aria-label="Previous Month">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="nav-btn" onClick={onNextMonth} aria-label="Next Month">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <div className="days-of-week">
        {DAYS_OF_WEEK.map(day => (
          <div key={day} className="dow-cell">{day}</div>
        ))}
      </div>

<<<<<<< HEAD
      <div className="dates-grid" onMouseLeave={() => handleDateHover(null)}>
=======
      <div className="dates-grid">
>>>>>>> 8ec1ebdb1f9d86fa94cf2dba00c484e9f22cfcbc
        {renderDays()}
      </div>
    </div>
  );
};

export default MonthGrid;
