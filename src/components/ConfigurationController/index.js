// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const changeContent = () => {
        onToggleShowContent()
      }

      const changeLeftNav = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const changeRightNav = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="control-bg">
          <div>
            <h1>Layout</h1>
            <div className="inputs-cont">
              <input
                checked={showContent}
                className="inputs"
                type="checkbox"
                id="content"
                onChange={changeContent}
              />
              <label className="label" htmlFor="content">
                Content
              </label>
            </div>
            <div className="inputs">
              <input
                checked={showLeftNavbar}
                className="inputs"
                type="checkbox"
                id="left-nav"
                onChange={changeLeftNav}
              />
              <label className="label" htmlFor="left-nav">
                Left Navbar
              </label>
            </div>
            <div className="inputs">
              <input
                checked={showRightNavbar}
                className="inputs"
                type="checkbox"
                id="right-nav"
                onChange={changeRightNav}
              />
              <label className="label" htmlFor="right-nav">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
