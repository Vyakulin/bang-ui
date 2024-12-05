import { Button, InputPassword, Checkbox, Radio, Switch, Lnk } from "@/components/Atoms/atoms";
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
        <InputPassword style="bg">Password</InputPassword>
        <InputPassword style="ol">Password</InputPassword>
      </div>
      <div className="elements">
        <InputPassword style="bg" hint>Hint</InputPassword>
        <InputPassword style="ol" hint>Hint</InputPassword>
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
   </div>
  );
}