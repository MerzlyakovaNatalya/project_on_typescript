import React, { useEffect, useState } from "react";

//interface
interface Param {
  id: number;
  name: string | number;
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
  getChangeValue: (paramId: number, e: any) => void;
  values: ParamValue[];
}
interface Props {
  params: Param[];
  getChangeValue: (paramId: number, e: any) => void;
  values: ParamValue[];
}

// State
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

//Компонент Layout создаёт State для всех значений параметров(value) и функцию getChangeValue, которая перезаписывает State
export const Layout: React.FC = () => {

  const model: Model = {
    paramValues: paramValue,
  };

  const [values, setValues] = useState<ParamValue[]>(model.paramValues);

  const getChangeValue = (id: number, e: any) => {

    const prevParamValues = values;
    const targetIndex = prevParamValues.findIndex((item) => item.paramId === id);
    
    if(targetIndex === -1) {
      return prevParamValues;
    }

    const copyParamValues = [...values];
    copyParamValues[targetIndex] = {
      ...copyParamValues[targetIndex],
      value: e.target.value
    }
    setValues(copyParamValues);
  };

  return <ParamEditor params={params} values={values} getChangeValue={getChangeValue}/>;
};

// Компонент ParamEditor создаёт функцию getModel, кторая содержит все проставленные значения параметров
const ParamEditor: React.FC<Props> = ({ params, getChangeValue, values }) => {

  const getModel = (): Model  => {
   return {
    paramValues: values,
  }
  }

  useEffect(() => {
    getModel();
  }, [values]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Params params={params}/>
        <Values getChangeValue={getChangeValue} values={values}/>
      </div>
    </>
  );
};

// Компонент Params выводит на экран все параметры
const Params: React.FC<PropsParams> = ({params}) => {
  
  return <div
  style={{ display: "flex", flexDirection: "column", marginRight: 20 }}
>
  {params.map((item) => (
    <label key={item.id}>{item.name}</label>
  ))}
</div>
}

// Компонент Values выводит на экран все значения параметров
const Values: React.FC<PropsValues>= ({getChangeValue, values}) => {

  return <div style={{ display: "flex", flexDirection: "column" }}>
  {values.map((i) => (
    <input
      key={i.paramId}
      type="text"
      value={i.value}
      placeholder={i.value}
      onChange={(e) => getChangeValue(i.paramId, e)}
      style={{ border: "1px solid #cac7c7" }}
    ></input>
  ))}
</div>
}