import React from 'react';
//@ts-ignore
const Alert = ({ type, message }) => {
  const alertTypeClasses = {
    success: 'bg-green-200 text-green-800',
    error: 'bg-red-200 text-red-800',
    info: 'bg-blue-200 text-blue-800',
  };
//@ts-ignore
  const alertClasses = `px-4 py-2 rounded-md border-l-4 ${alertTypeClasses[type]}`;

  return (
    <div className={alertClasses}>
      {message}
    </div>
  );
};

export default Alert;
