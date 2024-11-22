import { Card, CardContent } from "@app/@/components/ui/card";
import React from "react";

export default function BentoGrid() {
  return (
    <div className="grid justify-center grid-cols-8 lg:grid-cols-7 grid-rows-5 h-screen p-1 md:p-3 gap-2 md:gap-5">
      <Card className="col-span-4 lg:col-span-3 xl:col-span-4 row-span-3 bg-red-500 text-white">
        <CardContent>Red Block</CardContent>
      </Card>

      <Card className="col-span-4 xl:col-span-3  row-span-2 bg-blue-500 text-white">
        <CardContent>Blue Block</CardContent>
      </Card>

      <Card className="col-span-4 lg:col-span-2 xl:col-span-1 bg-pink-500 text-white">
        <CardContent>Purple Block</CardContent>
      </Card>

      <Card className="col-span-4 md:col-span-3 lg:col-span-2 row-span-3 bg-yellow-500 text-white">
        <CardContent>Yellow Block</CardContent>
      </Card>

      <Card className="col-span-4 md:col-span-5 row-span-3 lg:col-span-5 lg:row-span-2 bg-green-500 text-black">
        <CardContent>Green Block</CardContent>
      </Card>
    </div>
  );
}
