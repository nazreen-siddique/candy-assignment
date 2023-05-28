import styled from "styled-components"
const Cards = ({ data }) => {

    return (
        <Wrapper>
            <div className="card">
                {data.map((item) => {
                    const { department, description, date, id, designation } = item
                    return (
                        <article key={id} className="cardInfo">
                            <h2>{department || designation}</h2>
                            <p>{description}</p>
                            <h4>{date}</h4>
                        </article>

                    )
                })}
            </div>
        </Wrapper>

    )
}

export default Cards
const Wrapper = styled.div`
.card{
   width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.cardInfo{
    width: 20rem;
      height: 18rem;
      border-radius: 20px;
      border: 1px solid rgb(240, 239, 239);
      margin: 0.5rem 1rem;
      padding:2rem;
      line-height:1.5;
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: space-between;
      color: black;
      transition: all .5s ease;
      cursor: pointer;
      background-color:#fffbfb
}
p{
    margin: 1rem auto;
    font-size:0.9rem;
}
`
