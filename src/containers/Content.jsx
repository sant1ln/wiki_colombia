import './styles/container.css'

export const Content = ({children}) => {
  return (
    <main className="main_container">
      {children}
    </main>
  )
}