import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import styles from "./Report.module.css";

function Report() {
    const salesData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Sales Revenue ($)",
                data: [8000, 12000, 15000, 18000, 22000, 25000],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    const categoryData = {
        labels: ["Pet Food", "Pets", "Others"],
        datasets: [
            {
                data: [60, 30, 10],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    const salesTableData = [
        { id: 1, product: "Dog Food", category: "Pet Food", quantity: 100, revenue: 5000 },
        { id: 2, product: "Golden Retriever", category: "Pets", quantity: 2, revenue: 8000 },
        { id: 3, product: "Fish Food", category: "Pet Food", quantity: 50, revenue: 2000 },
        { id: 4, product: "Cat Food", category: "Pet Food", quantity: 75, revenue: 3000 },
        { id: 5, product: "Miscellaneous Items", category: "Others", quantity: 20, revenue: 1500 },
    ];

    return (
        <div className={`${styles.container} container`}>
            <h1 className={`${styles.title} mt-5 mb-5`}>Pet Store Sales Report</h1>

            <section className={styles.summarySection}>
                <div className={`${styles.summaryCard}`}>
                    <h2>Total Sales</h2>
                    <p className={`${styles.summaryValue}`}>$75,000</p>
                </div>
                <div className={`${styles.summaryCard}`}>
                    <h2>Total Products Sold</h2>
                    <p className={`${styles.summaryValue}`}>1,500</p>
                </div>
                <div className={`${styles.summaryCard}`}>
                    <h2>Top Category</h2>
                    <p className={`${styles.summaryValue} mb-5`}>Pet Food</p>
                </div>
            </section>

            <section className={styles.chartSection}>
                <div className={`${styles.chartContainer}`}>
                    <h3>Monthly Sales</h3>
                    <Bar data={salesData} />
                </div>
                <div className={`${styles.chartContainer} ${styles.smallChart}`}>
                    <h3>Sales by Category</h3>
                    <Pie data={categoryData} />
                </div>
            </section>

            <section className={styles.tableSection}>
                <h2>Detailed Sales Table</h2>
                <table className={`${styles.salesTable}`}>
                    <thead>
                        <tr>
                            <th className={`${styles.tableHeader}`}>ID</th>
                            <th className={`${styles.tableHeader}`}>Product</th>
                            <th className={`${styles.tableHeader}`}>Category</th>
                            <th className={`${styles.tableHeader}`}>Quantity</th>
                            <th className={`${styles.tableHeader}`}>Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesTableData.map((item) => (
                            <tr key={item.id} className={`${styles.tableRow}`}>
                                <td className={`${styles.tableData}`}>{item.id}</td>
                                <td className={`${styles.tableData}`}>{item.product}</td>
                                <td className={`${styles.tableData}`}>{item.category}</td>
                                <td className={`${styles.tableData}`}>{item.quantity}</td>
                                <td className={`${styles.tableData}`}>${item.revenue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Report;
