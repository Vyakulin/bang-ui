import { Button, InputPassword, Checkbox, Radio, Switch, Lnk, InputText, Accordion, Select, ButtonSegment, Tooltip } from "@/components/Atoms/atoms";
import './style.scss';
import { HiCheck } from "react-icons/hi2";

export default function Home() {
  return (
   <div className="test">
    <div className="section">
      <h1 className='h1'>H1 — SF Pro Display Bold 40</h1>
      <h2 className='h2'>H2 — SF Pro Display Semibold 32</h2>
      <h3 className='h3'>H3 — SF Pro Display Medium 24</h3>
      <p className='p'>P — SF Pro Text Regular 16</p>
      <p className='sm'>Sm — SF Pro Text Regular 12</p>
    </div>
    <div className="section">
      <h1 className="h1">Links</h1>
      <div className="elements">
        <Lnk href='#' color="w">
          Link<HiCheck />
        </Lnk>
        <Lnk href='#' color="a">
          Link<HiCheck />
        </Lnk>
      </div>
      <div className="elements">
        <Lnk href='#' color="w" style="-underline">
          Link<HiCheck />
        </Lnk>
        <Lnk href='#' color="a" style="-underline">
          Link<HiCheck />
        </Lnk>
      </div>
    </div>
    <div className="section">
      <h1 className="h1">Buttons</h1>
      <div className="elements">
        <Button style="bg" color="w">Button<HiCheck /></Button>
        <Button style="bg" color="a">Button<HiCheck /></Button>
        <Button style="bg" color="w" onlyIcon><HiCheck /></Button>
        <Button style="bg" color="a" onlyIcon><HiCheck /></Button>
      </div>
      <div className="elements">
        <Button style="ol" color="w">Button<HiCheck /></Button>
        <Button style="ol" color="a">Button<HiCheck /></Button>
        <Button style="ol" color="w" onlyIcon><HiCheck /></Button>
        <Button style="ol" color="a" onlyIcon><HiCheck /></Button>
      </div>
      <div className="elements">
        <ButtonSegment style="bg" id="segment1">
          Button;Button;Button
        </ButtonSegment>
      </div>
      <div className="elements">
        <ButtonSegment style="ol" id="segment2">
          Button;Button;Button;Button
        </ButtonSegment>
      </div>
    </div>
    <div className="section">
      <h1 className="h1">Inputs</h1>
      <div className="elements">
        <InputText style="bg">Default</InputText>
        <InputText style="ol">Default</InputText>
        <InputText style="line">Default</InputText>
      </div>
      <div className="elements">
        <InputPassword style="bg">Password</InputPassword>
        <InputPassword style="ol">Password</InputPassword>
        <InputPassword style="line">Password</InputPassword>
      </div>
      <div className="elements">
        <InputText style="bg" hint>Hint</InputText>
        <InputText style="ol" hint>Hint</InputText>
        <InputText style="line" hint>Hint</InputText>
      </div>
      <div className="elements">
        <InputText style="bg" placeholder="Placeholder">Input</InputText>
        <InputText style="ol" placeholder="Placeholder">Input</InputText>
        <InputText style="line" placeholder="Placeholder">Input</InputText>
      </div>
    </div>
    <div className="section">
      <h1 className="h1">Checkboxes</h1>
      <div className="elements">
        <Checkbox style='bg'/>
        <Checkbox style='ol'/>
      </div>
      <div className="elements">
        <Radio style='bg' name="test"/>
        <Radio style='ol' name="test"/>
      </div>
      <div className="elements">
        <Switch style='bg' name="test"/>
        <Switch style='ol' name="test"/>
      </div>
    </div>
    <div className="section">
      <h1 className="h1">Accordion</h1>
      <div className="elements">
        <Accordion style='bg' color="w">
          Some text for the accordion
        </Accordion>
        <Accordion style='bg' color="a">
          Some text for the accordion
        </Accordion>
      </div>
      <div className="elements">
        <Accordion style='ol' color="w">
          Some text for the accordion
        </Accordion>
        <Accordion style='ol' color="a">
          Some text for the accordion
        </Accordion>
      </div>
      <div className="elements">
        <Accordion style='line' color="w">
          Some text for the accordion
        </Accordion>
        <Accordion style='line' color="a">
          Some text for the accordion
        </Accordion>
      </div>
    </div>
    <div className="section">
      <h1 className="h1">Select</h1>
      <div className="elements">
        <Select style='bg' color="w">
          Item1;Item2;Item3
        </Select>
        <Select style='bg' color="a">
          Item1;Item2;Item3
        </Select>
      </div>
      <div className="elements">
        <Select style='ol' color="w">
          Item1;Item2;Item3
        </Select>
        <Select style='ol' color="a">
          Item1;Item2;Item3
        </Select>
      </div>
    </div>
    <div className="section">
      <h1 className="h1">Tooltips</h1>
      <div className="elements">
        <div className="h3">
          HoverMe
          <Tooltip color="w">
            Tooltip example<br />
            Tooltip text 2
          </Tooltip>
        </div>
        <div className="h3">
          HoverMe
          <Tooltip color="a">
            Tooltip example<br />
            Tooltip text 2
          </Tooltip>
        </div>
      </div>
    </div>
   </div>
  );}