import './SliderProgress.css'

export default function SliderProgress(props: { current: number, total: number }) {
  return (
    <div className="slider-progress">
      {
        Array.from({ length: props.total }, (_, i) => {
          return <Status done={i < props.current} key={i} />
        })
      }
    </div>
  )
}

function Status(props: { done: boolean }) {
  if (props.done) return (
    <div className="status">
      ⬤
    </div>
  )
  return (
    <div className="status">
      ◯
    </div>
  )
}
