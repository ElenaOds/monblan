  (() => {
    const fromEl = document.querySelector('input[name="from"]');
    const fromDatepicker = new Datepicker(fromEl, {
    autohide: true,
    format: "dd_mm_yyyy",
    minDate: "17-02-2016",
    daysOfWeekHighlighted: [0]
});

    const toEl = document.querySelector('input[name="to"]');
    const toDatepicker = new Datepicker(toEl, {
    autohide: true,
    format: "dd_mm_yyyy",
    minDate: "17-02-2016",
    daysOfWeekHighlighted: [0]
});

  })();