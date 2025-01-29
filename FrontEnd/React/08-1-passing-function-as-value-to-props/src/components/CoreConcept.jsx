import './CoreConcept.css'

export default function CoreConcept({img,title,description}){
  return (
    <li>
      <img src={img} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}