export const getMarksBadge = (marks) => {
  if (marks < 70) return { color: '#f93333', status: 'Failed' };
  else return { color: '#0cbc8b', status: 'Pass' };
};
