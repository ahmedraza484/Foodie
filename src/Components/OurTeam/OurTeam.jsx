import { data } from '../../restApi.json'
import './OurTeam.css'

const OurTeam = () => {
  return (
    <>
      <div className="team">
        <div className="container">
          <div className="heading-container">
            <h1>OUR TEAM</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae porro dicta placeat tempore doloribus nisi modi at et amet alias.
            </p>
          </div>
          <div className="team-container">
            {data[0].team.map((element) => {
              return <div className="card" key={element.id}>
                <img src={element.image} alt="" />
                <h1>{element.name}</h1>
                <p>{element.designation}</p>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default OurTeam