document.addEventListener("DOMContentLoaded", () => {
  const dataNgay = {
    labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6"],
    datasets: [
      {
        label: "Khám lâm sàng",
        data: [35.5, 26.30, 26.25, 32.27, 29.39],
        backgroundColor: "rgba(0, 123, 255, 0.6)",
        borderColor: "rgba(0, 123, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Khám lâm sàng và xét nghiệm",
        data: [80.45, 78.23, 76.54, 81.30, 80.18],
        backgroundColor: "rgba(40, 167, 69, 0.6)",
        borderColor: "rgba(40, 167, 69, 1)",
        borderWidth: 1,
      },
      {
        label: "Khám lâm sàng, xét nghiệm và chẩn đoán hình ảnh",
        data: [160.08, 126.44, 143.27, 150.2, 130.49],
        backgroundColor: "rgba(255, 193, 7, 0.6)",
        borderColor: "rgba(255, 193, 7, 1)",
        borderWidth: 1,
      },
      {
        label: "Khám lâm sàng, xét nghiệm, chần đoán hình ảnh và tham dò chức năng",
        data: [193.24, 180.10, 185, 160.20, 182.42],
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
            data: [29.26, 32.1, 28.10, 22.21, 28.46],
            backgroundColor: "rgba(0, 123, 255, 0.6)",
            borderColor: "rgba(0, 123, 255, 1)",
            borderWidth: 1,
          },
          {
            label: "Khám lâm sàng và xét nghiệm",
            data: [75.52, 79.55, 73.22, 68.11, 77.34],
            backgroundColor: "rgba(40, 167, 69, 0.6)",
            borderColor: "rgba(40, 167, 69, 1)",
            borderWidth: 1,
          },
          {
            label: "Khám lâm sàng, xét nghiệm và chẩn đoán hình ảnh",
            data: [119.37, 126.43, 106.2, 92.30, 114.44],
            backgroundColor: "rgba(255, 193, 7, 0.6)",
            borderColor: "rgba(255, 193, 7, 1)",
            borderWidth: 1,
          },
          {
            label: "Khám lâm sàng, xét nghiệm, chần đoán hình ảnh và tham dò chức năng",
            data: [164.03, 180.50, 175.48, 160.49, 154.29],
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

async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/api/thoigiankhamtrongngay?ngaydk=2024-10-18');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const LS = data.ketQua.find(item => item.loaikham === 'LS');
    const LS_XN = data.ketQua.find(item => item.loaikham === 'LS.XN');
    const LS_XN_HA = data.ketQua.find(item => item.loaikham === 'LS.XN.HA');
    const LS_XN_HA_CN = data.ketQua.find(item => item.loaikham === 'LS.XN.HA.CN');
    if (data) {
      const Element_LS = document.querySelector('.thoigiankham-ls');
      Element_LS.textContent = `${Math.floor(LS.avg_thoigian_phut)} phút`;
      const Element_LS_XN = document.querySelector('.thoigiankham-ls-xn');
      Element_LS_XN.textContent = `${Math.floor(LS_XN.avg_thoigian_phut)} phút`;
      const Element_LS_XN_HA = document.querySelector('.thoigiankham-ls-xn-ha');
      Element_LS_XN_HA.textContent = `${Math.floor(LS_XN_HA.avg_thoigian_phut)} phút`;
      const Element_LS_XN_HA_CN = document.querySelector('.thoigiankham-ls-xn-ha-cn');
      Element_LS_XN_HA_CN.textContent = `${Math.floor(LS_XN_HA_CN.avg_thoigian_phut)} phút`;
    }
  } catch (error) {
    console.error('Có lỗi khi lấy dữ liệu:', error);
  }
}
// Gọi hàm fetchData
//fetchData();



