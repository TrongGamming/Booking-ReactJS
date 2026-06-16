# Giao Diện Trang Đặt Phòng Khách Sạn Hiện Đại (Booking-ReactJS)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

Booking-ReactJS là một dự án giao diện Landing Page chuyên nghiệp phục vụ việc đặt phòng khách sạn. Dự án chú trọng vào tính thẩm mỹ cao, micro-interactions mượt mà và giao diện thích ứng hoàn hảo (Responsive Design) trên mọi loại thiết bị di động cũng như máy tính để bàn.

---

<details>
<summary>🇬🇧 Click to view English Version</summary>

# Modern Hotel Booking Landing Page (Booking-ReactJS)

Booking-ReactJS is a highly interactive, responsive Landing Page interface for hotel room booking. The project features clean visuals, subtle micro-animations, and responsive layout optimizations for a seamless user experience across all screen sizes.

</details>

---

## 🚀 Các Tính Năng Nổi Bật (Key Features)

*   **Bộ lọc Tìm kiếm Thông minh (Smart Filter)**: Khách hàng có thể dễ dàng chọn địa điểm (TP. Hồ Chí Minh, Đà Nẵng, Vũng Tàu, Hà Nội, Nha Trang), thiết lập ngày check-in/out, và thay đổi số lượng khách (người lớn/trẻ em) bằng bộ đếm phản hồi trực tiếp.
*   **Giao diện Responsive**: Layout cấu trúc linh hoạt sử dụng grid system giúp hiển thị đẹp mắt trên màn hình Desktop rộng lẫn điện thoại nhỏ gọn.
*   **Kiến trúc Component Sạch sẽ**: Phân tách mã nguồn thành các block độc lập: `Header`, `Body` (chứa các Section phòng và dịch vụ), và `Footer` giúp dễ bảo trì và tái sử dụng.
*   **Aesthetics & Micro-interactions**: Sử dụng CSS Modules, hiệu ứng hover, transition mượt mà, tạo cảm giác cao cấp và hiện đại cho website.

---

<details>
<summary>🇬🇧 Click to view English Version</summary>

## 🚀 Key Features

*   **Smart Booking Filter**: Responsive form to choose locations (HCM City, Da Nang, Vung Tau, Hanoi, Nha Trang), check-in/out dates, and guest count (adults/children) via interactive adjusters.
*   **Responsive Web Design (RWD)**: Structured grid layout adapts perfectly to mobile, tablet, and desktop viewports.
*   **Component-Driven Architecture**: Fully modularized layout (`Header`, `Body`, `Footer`) ensuring maintainability and scalability.
*   **Polished Aesthetics**: Enriched with CSS effects, hover transitions, and visual micro-animations to enhance user engagement.

</details>

---

## 📁 Cấu Trúc Thư Mục (Folder Structure)

```text
src/
├── component/          # Các Component của UI (App, Header, Body, Footer...)
├── css-module/         # Chứa các CSS module tối ưu hóa style cho component
└── resource/           # Tài nguyên tĩnh của ứng dụng
    ├── css/            # Các file CSS toàn cục và cục bộ
    └── img/            # Hình ảnh background, phòng, dịch vụ
```

---

<details>
<summary>🇬🇧 Click to view English Version</summary>

## 📁 Folder Structure

```text
src/
├── component/          # React Components (App, Header, Body, Footer...)
├── css-module/         # CSS Modules for modular component styling
└── resource/           # Application static assets
    ├── css/            # Global/local stylesheet files
    └── img/            # Images (background, rooms, icons)
```

</details>

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

*   **Frontend Library**: ReactJS 18
*   **Styling**: Vanilla CSS, FontAwesome 6 (icons)
*   **Package Manager**: Yarn (1.22+)
*   **Build Tool**: Create React App (react-scripts)

---

<details>
<summary>🇬🇧 Click to view English Version</summary>

## 🛠️ Tech Stack

*   **Frontend Library**: ReactJS 18
*   **Styling**: Vanilla CSS, FontAwesome 6 (icons)
*   **Package Manager**: Yarn (1.22+)
*   **Build Tool**: Create React App (react-scripts)

</details>

---

## 💻 Hướng Dẫn Cài Đặt (Installation)

1.  **Cài đặt Yarn**:
    Đảm bảo bạn đã cài đặt Node.js và Yarn. Nếu chưa cài Yarn toàn cục, chạy:
    ```bash
    npm install --global yarn
    ```
2.  **Cài đặt dependencies**:
    Di chuyển vào thư mục dự án và chạy:
    ```bash
    yarn install
    ```
3.  **Khởi chạy môi trường local**:
    ```bash
    yarn start
    ```
    Ứng dụng sẽ chạy tại địa chỉ: `http://localhost:3000`.
4.  **Tạo bản build sản xuất**:
    ```bash
    yarn build
    ```

---

<details>
<summary>🇬🇧 Click to view English Version</summary>

## 💻 Installation

1.  **Prerequisites**:
    Ensure Node.js and Yarn are installed. If you need to install Yarn globally:
    ```bash
    npm install --global yarn
    ```
2.  **Install Dependencies**:
    Navigate to the project folder and run:
    ```bash
    yarn install
    ```
3.  **Start Local Server**:
    ```bash
    yarn start
    ```
    Open your browser and navigate to: `http://localhost:3000`.
4.  **Production Build**:
    ```bash
    yarn build
    ```

</details>
