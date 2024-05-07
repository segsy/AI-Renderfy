"use client";
import { Button } from "@/components/ui/button";
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Tabs,TabsContent,TabsList,TabsTrigger,} from "@/components/ui/tabs";

export function LandingCreatives() {
  return (
    <Tabs defaultValue="account" className="w-[800px]">
      <TabsList className="grid w-full grid-cols-6">
        <TabsTrigger value="account">AI Text Generator</TabsTrigger>
        <TabsTrigger value="password">AI Image Generator</TabsTrigger>
        <TabsTrigger value="password">AI Video Generator</TabsTrigger>
        <TabsTrigger value="password">AI Music Generator</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>AI Text Generator</CardTitle>
            <CardDescription>
              AI Text Image.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              AI TEXT GENERATOR
            </div>
            
          </CardContent>
          <CardFooter>
            
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>AI Video Generator</CardTitle>
            <CardDescription>
            AI Video GENERATOR.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              AI Video GENERATOR
            </div>
            
          </CardContent>
          <CardFooter>
            
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>AI Music Generator</CardTitle>
            <CardDescription>
            AI Music GENERATOR.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              AI Music GENERATOR
            </div>
            
          </CardContent>
          <CardFooter>
            
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>AI Image Generator</CardTitle>
            <CardDescription>
              AI image.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
             AI IMAGE
            </div>
          
          </CardContent>
          <CardFooter>
          
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
