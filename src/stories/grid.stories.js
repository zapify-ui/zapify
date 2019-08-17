/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import Grid from "../components/Grid";
import InfoCard from "../components/InfoCard/index"

storiesOf("Grid", module).addWithJSX("Grid with 16 Columns ", () => 

<div>
<Grid type="grid grid_16">
  
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
</Grid>
<Grid type="grid grid_16">
            <div className="col col-2">02</div>
            <div className="col col-2">02</div>
            <div className="col col-2">02</div>
            <div className="col col-2">02</div>
            <div className="col col-2">02</div>
            <div className="col col-2">02</div>
            <div className="col col-2">02</div>
            <div className="col col-2">02</div>
</Grid>
<Grid type="grid grid_16">
            <div className="col col-4">04</div>
            <div className="col col-4">04</div>
            <div className="col col-4">04</div>
            <div className="col col-4">04</div>
</Grid>
<Grid type="grid grid_16">
            <div className="col col-8">08</div>
            <div className="col col-8">08</div>
</Grid>
<Grid type="grid grid_16">
            <div className="col col-16">16</div>
</Grid>
    </div>
).addWithJSX("Grid with 12 Columns" ,()=>
<div>
<Grid type="grid grid_12">
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
        <div className="col col-1">01</div>
</Grid>
<Grid type="grid grid_12">
    
        <div className="col col-2">02</div>
        <div className="col col-2">02</div>
        <div className="col col-2">02</div>
        <div className="col col-2">02</div>
        <div className="col col-2">02</div>
        <div className="col col-2">02</div>
</Grid>
<Grid type="grid grid_12">
        <div className="col col-3">03</div>
        <div className="col col-3">03</div>
        <div className="col col-3">03</div>
        <div className="col col-3">03</div>
</Grid>
        <Grid type="grid grid_12">
        <div className="col col-4">04</div>
        <div className="col col-4">04</div>
        <div className="col col-4">04</div>
    </Grid>
        <Grid type="grid grid_12">
        <div className="col col-6">06</div>
        <div className="col col-6">06</div>
    </Grid>
        <Grid type="grid grid_12">
        <div className="col col-12">12</div>
    </Grid>
        <Grid type="grid grid_12">
        <div className="col col-9">09</div>
        <div className="col col-3">03</div>
    </Grid>
</div>
).addWithJSX("Grid with 8 Columns", ()=>
    <div>
        <Grid type="grid grid_8">
            <div className="col col-1">01</div>
            <div className="col col-1">01</div>
            <div className="col col-1">01</div>
            <div className="col col-1">01</div>
            <div className="col col-1">01</div>
            <div className="col col-1">01</div>
            <div className="col col-1">01</div>
            <div className="col col-1">01</div>
            
        </Grid>
        <Grid type="grid grid_8">

            <div className="col col-2">02</div>
            <div className="col col-2">02</div>
            <div className="col col-2">02</div>
            <div className="col col-2">02</div>
           
        </Grid>
        <Grid type="grid grid_8">
            <div className="col col-4">04</div>
            <div className="col col-4">04</div>
           
        </Grid>
        <Grid type="grid grid_8">
            <div className="col col-8">08</div>
            
        </Grid>
    </div>
).addWithJSX("Grid with Card",()=>
<div>
    <Grid type="grid grid_8">
            <div className="col col-4"><InfoCard/></div>
            <div className="col col-4"><InfoCard/></div>
    </Grid>
</div>

);
