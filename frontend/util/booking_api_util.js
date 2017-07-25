export function createBooking(bookingInfo) {
  return $.ajax({
    method: "POST",
    url: "/api/bookings",
    data: { bookingInfo },
  });
}
