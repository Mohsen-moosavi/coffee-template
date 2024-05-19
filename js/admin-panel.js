const columXValues = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد" , "شهریور" , "مهر" , "آبان" , "آذر", "دی" , "بهمن" , "اسفند"];
const columnYValues = [500 , 400 , 300 , 200 , 100 ,10 , 200 , 230 , 100 , 400 , 123 , 330];
const columnBarColors = '#389c92'

new Chart("myChart", {
  type: "bar",
  data: {
    labels: columXValues,
    datasets: [{
      backgroundColor: columnBarColors,
      data: columnYValues
    }]
  },options: {
    legend: {display: false},
    title: {
      display: true,
      text: "میزان فروش درهر ماه"
    }
  }
});