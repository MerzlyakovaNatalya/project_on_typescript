import { findByLabelText } from "@testing-library/react";
import React, { useState } from "react";

interface Param {
  id: number;
  name: string;
  type: "string";
}
interface ParamValue {
  paramId: number;
  value: string;
}
interface Model {
  paramValues: ParamValue[];
}
interface PropsParams {
  params: Param[];
}
interface PropsValues {
  model: Model;
  getChangeValue: (paramId: number, e: any) => void
}
interface Props {
  params: Param[];
  model: Model;
}
interface State {
  params: Param[];
  paramsValues: ParamValue[];
}


//  class ParamEditor extends React.Component<Props, State> {
//      public getModel(): Model {
//      }
//  }

export const Layout: React.FC = () => {
  const params: Param[] = [
    {
      id: 1,
      name: "Назначение",
      type: "string",
    },
    {
      id: 2,
      name: "Длина",
      type: "string",
    },
  ];
  const paramValue: ParamValue[] = [
    {
      paramId: 1,
      value: "повседневное",
    },
    {
      paramId: 2,
      value: "макси",
    },
  ];
  const model: Model = {
    paramValues: paramValue,
  };

  return <ParamEditor params={params} model={model} />;
};

const ParamEditor: React.FC<Props> = ({ params, model }) => {

  const getChangeValue = (paramId: number, e: any) => {
    const newValue = model.paramValues.filter((item) => item.paramId === paramId);
    model.paramValues.map((item) => {

    }) 
    console.log(paramId, e.target.value, newValue)
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Params params={params}/>
        <Values model={model} getChangeValue={getChangeValue}/>
      </div>
    </>
  );
};

const Params: React.FC<PropsParams> = ({params}) => {
  
  return <div
  style={{ display: "flex", flexDirection: "column", marginRight: 20 }}
>
  {params.map((item) => (
    <label key={item.id}>{item.name}</label>
  ))}
</div>
}

const Values: React.FC<PropsValues>= (props) => {

  const {model, getChangeValue} = props;

  return <div style={{ display: "flex", flexDirection: "column" }}>
  {model.paramValues.map((i) => (
    <input
      key={i.paramId}
      type="text"
      placeholder={i.value}
      onChange={(e) => getChangeValue(i.paramId, e)}
      style={{ border: "1px solid #cac7c7" }}
    ></input>
  ))}
</div>
}