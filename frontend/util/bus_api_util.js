export const fetchBuses = (buses) => {
  return $.ajax({
    method: 'GET',
    url: 'api/buses',
    data: buses
  });
};
