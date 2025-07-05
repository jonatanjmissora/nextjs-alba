
export default function page() {
  return (
    <>
      <h2 className="w-full text-center text-2xl font-semibold py-10">Nuestros Servicios en el Centro de Belleza</h2>

      <div className="w-full flex justify-between items-center pb-32">

        <ServicesCard />

      </div>
    </>
  )
}

const ServicesCard = () => {

  const services = [{
    id: 1,
    title: "Titulo del servicio",
    description: ["descripcion 1", "descripcion 2", "descripcion 3", "descripcion 4", "descripcion 5"],
    image: "./servicio1.jpg"   
  },
  {
    id: 2,
    title: "Titulo del servicio",
    description: ["descripcion 1", "descripcion 2", "descripcion 3", "descripcion 4", "descripcion 5"],
    image: "./servicio2.jpg"   
  },
  {
    id: 3,
    title: "Titulo del servicio",
    description: ["descripcion 1", "descripcion 2", "descripcion 3", "descripcion 4", "descripcion 5"],
    image: "./servicio3.jpg"   
  },
  {
    id: 4,
    title: "Titulo del servicio",
    description: ["descripcion 1", "descripcion 2", "descripcion 3", "descripcion 4", "descripcion 5"],
    image: "./servicio4.jpg"   
  }
]

  return (
    <ul className="w-full flex justify-between items-center py-10">
      {
        services.map(service => (
          <li key={service.id} className="flex flex-col gap-3 p-4 bg-[var(--background-two)] rounded-tl-4xl rounded-br-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)]">
            <img src={service.image} alt="" className="w-[200px] h-[300px] object-cover rounded-tl-4xl rounded-br-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.25)]"/>
            <h3 className="font-semibold text-[var(--primary-green)]">{service.title}</h3>
            <ul className="flex flex-col gap-2 list-disc pl-6">
              {service.description.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </li>
        ))
      }
       
    </ul>
  )
}