import img from "../assets/image.png"

function Card() {
  return (
    <div style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      transition: "0.3s"
    }}>
      
      <img 
        src={img} 
        alt="building" 
        style={{
          width: "100%",
          borderRadius: "10px",
          marginBottom: "15px"
        }}
      />

      <h3>Наш офис</h3>
      <p>Бишкек, Кыргызстан</p>

    </div>
  )
}

export default Card