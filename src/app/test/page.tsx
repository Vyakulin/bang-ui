import { Button, InputPassword, Checkbox, Radio, Switch, Lnk, InputText, Accordion } from "@/components/Atoms/atoms";
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
        <Lnk href='#' color="w2">
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
        <Lnk href='#' color="w2" style="-underline">
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
      </div>
      <div className="elements">
        <Button style="ol" color="w">Button<HiCheck /></Button>
        <Button style="ol" color="a">Button<HiCheck /></Button>
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
   </div>
  );
}