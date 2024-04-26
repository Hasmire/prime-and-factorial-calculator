"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NumberForm, NumberFormSchema } from "@/types/number";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Label } from "./ui/label";
import { useState } from "react";

type CalculateCardProps = {
  title: string;
  description: string;
  calculate: (num: number) => string;
};

export default function CalculateCard(props: CalculateCardProps) {
  const { title, description } = props;

  const [output, setOutput] = useState("");

  const form = useForm<NumberForm>({
    resolver: zodResolver(NumberFormSchema),
    defaultValues: {
      number: 0,
    },
  });

  function onSubmit(values: NumberForm) {
    const result = props.calculate(values.number);
    setOutput(result);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Input</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter number here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-1">
              <Label>Output</Label>
              <Input value={output} placeholder="Result goes here..." readOnly />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" variant="neutral">
              Calculate
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
