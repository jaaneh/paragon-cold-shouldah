"use client"

export function CardsGrid() {
  return (
    <section className="grid grid-cols-4 gap-6 mt-6 container">
      {Array.from({ length: 6 }).map((_, i) => {
        return <Card key={i} />
      })}
    </section>
  )
}

function Card() {
  return <div className="w-full h-40 bg-blue-300/25 rounded-md"></div>
}
