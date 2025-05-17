export const compareDates = (taskDate) => {
    const today = new Date();
    
    const todayDate = today.toISOString().split('T')[0];

    const msPerDay = 1000 * 60 * 60 * 24;
    const todayMid = new Date(todayDate + 'T00:00:00');
    const taskMid  = new Date(taskDate  + 'T00:00:00');
   
    const diffDays = Math.floor((taskMid - todayMid) / msPerDay);

    if (diffDays < 0)   return 'overdue';
    if (diffDays === 0) return 'today';
    if (diffDays <= 7)  return 'soon';
    return 'later';
}