import { Card, CardContent } from "@app/@/components/ui/card";
import React from "react";

export default function BentoGrid() {
  return (
    <div className="grid justify-center grid-cols-7 grid-rows-5 h-screen p-3 gap-5">
      <Card className="col-span-4 row-span-3 bg-red-500 text-white">
        <CardContent>Red Block</CardContent>
      </Card>

      <Card className="col-span-3 row-span-2 bg-blue-500 text-white">
        <CardContent>Blue Block</CardContent>
      </Card>

      <Card className="col-span-1 bg-pink-500 text-white">
        <CardContent>Purple Block</CardContent>
      </Card>

      <Card className="col-span-2 row-span-3 bg-yellow-500 text-white">
        <CardContent>Yellow Block</CardContent>
      </Card>

      <Card className="col-span-5 row-span-2 bg-green-500 text-black">
        <CardContent>Green Block</CardContent>
      </Card>
    </div>
  );
}
