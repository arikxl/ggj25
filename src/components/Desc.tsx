
type Props = {
    desc:string
}

const Desc = ({ desc }: Props) => {
  return (
      <h1 className="desc">{desc}</h1>
  )
}

export default Desc