document.addEventListener("DOMContentLoaded", () => {
  const dataNgay = {
    labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"],
    datasets: [
      {
        label: "Khám lâm sàng",
        data: [16, 24, 26, 14, 30, 15, 17],
        backgroundColor: "rgba(0, 123, 255, 0.6)",
        borderColor: "rgba(0, 123, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Khám lâm sàng và xét nghiệm",
        data: [25, 35, 45, 33, 24, 45, 26],
        backgroundColor: "rgba(40, 167, 69, 0.6)",
        borderColor: "rgba(40, 167, 69, 1)",
        borderWidth: 1,
      },
      {
        label: "Khám lâm sàng, xét nghiệm và chẩn đoán hình ảnh",
        data: [38, 50, 40, 38, 55, 50, 40],
        backgroundColor: "rgba(255, 193, 7, 0.6)",
        borderColor: "rgba(255, 193, 7, 1)",
        borderWidth: 1,
      },
      {
        label: "Khám lâm sàng, xét nghiệm, chần đoán hình ảnh và tham dò chức năng",
        data: [55, 53, 60, 62, 54, 55, 76],
        backgroundColor: "rgba(102, 51, 153, 0.6)",
        borderColor: "rgba(102, 51, 153, 1)",
        borderWidth: 1,
      },        
    ],
  };

  const dataThang = {
      labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4", "Tuần 5"],
      datasets: [
          {
            label: "Khám lâm sàng",
            data: [16, 17, 15, 19, 25],
            backgroundColor: "rgba(0, 123, 255, 0.6)",
            borderColor: "rgba(0, 123, 255, 1)",
            borderWidth: 1,
          },
          {
            label: "Khám lâm sàng và xét nghiệm",
            data: [26, 24, 28, 30, 22],
            backgroundColor: "rgba(40, 167, 69, 0.6)",
            borderColor: "rgba(40, 167, 69, 1)",
            borderWidth: 1,
          },
          {
            label: "Khám lâm sàng, xét nghiệm và chẩn đoán hình ảnh",
            data: [40, 55, 70, 45, 55],
            backgroundColor: "rgba(255, 193, 7, 0.6)",
            borderColor: "rgba(255, 193, 7, 1)",
            borderWidth: 1,
          },
          {
            label: "Khám lâm sàng, xét nghiệm, chần đoán hình ảnh và tham dò chức năng",
            data: [60, 55, 70, 75, 50],
            backgroundColor: "rgba(102, 51, 153, 0.6)",
            borderColor: "rgba(102, 51, 153, 1)",
            borderWidth: 1,
          },        
        ],
    };

  const options = {
      responsive: true,
      maintainAspectRatio: false, // Tắt giữ tỷ lệ để tuỳ chỉnh kích thước
      plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              font: {
                size: 14, // Điều chỉnh kích thước chữ
              },
              padding: 20, // Khoảng cách giữa các nhãn
              boxWidth: 20, // Kích thước ô màu
            },
          },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
              stepSize: 5, // Khoảng cách giữa các giá trị
              max: 240, // Giá trị lớn nhất hiển thị trên trục y
              callback: function (value) {
                return value.toLocaleString(); // Format giá trị với dấu phẩy
              },
          },
        },
      },
  };
    

  // Chart Ngày
  const ctx1 = document.getElementById("chartNgayTheoTuan").getContext("2d");
  new Chart(ctx1, {
    type: "bar",
    data: dataNgay,
    options: options,
  });

  // Chart Tuần
  const ctx2 = document.getElementById("chartTuanTheoThang").getContext("2d");
  new Chart(ctx2, {
    type: "bar",
    data: dataThang,
    options: options,
  });
});
