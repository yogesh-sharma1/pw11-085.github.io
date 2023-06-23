import React from 'react'
import GitHubCalendar from "react-github-calender"

const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
  
    return contributions.filter(activity => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
const Githubstats = () => {
  return (
    <div className='react-activity-calendar'>
        <GitHubCalendar
            username={"pw11-085"}
            transformData={selectLastHalfYear}
            hideColorLegend
            hideTotalCount
            fontSize={16}
          />
          <div  id="github-streak-stats"></div>
          <div  id="github-top-langs"></div>
          <div  id="github-stats-card"></div>
    </div>
  )
}

export default Githubstats