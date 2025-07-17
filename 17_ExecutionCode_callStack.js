/* Global Execution context is firstly execute when ever we run a code
 and it represents with .this and in browser .this value is window object
 js in single threaded
 two mainly exectution context are in js
 1. Global Execution Context 2. Function extecuction context 
 
 in mongoose there is a property called eval extecuction context 
 it is a property of global object

code execute in two phases 
1. Memory Allocation Phase/ creation phase (MCP)
2. execution phase

execution phase executes all the codes and REPL but memory allocation only
stores variables value in it

every code run in the enviroment it runs inside global .this

MCP hold value of variables only

***************** Detailed Execution Scenerio *****************************
*/

let value1 = 10
let value2 = 5 
function addNumber(number1, number2) {
    let total = number1 + number2
    return total
}
let result1 = addNumber(value1, value2)
let result2 = addNumber(10, 2)

/* 
 phase 1. GEP

Phase 2.                Code Running in MCP

value1 => undefined 
value2 => undefined
addNumber => defination
result1 => undefind
result2 => undefind

phase 3.               Execution phase


value1 <= 10 
value2 <= 5
addNumber => no action will be taken because there in no execution in this
function <=     we have already hold the defination in addNumber 
result1 => called addNUmber from function

        so,
        new variable enviroment + execution thread created
        now again MCP & EP will be created for addNumber

            Mcp**
            value1 => undefined 
            value2 => undefined
            total  => undefined
            
            Ep**
            num1    => 10
            num     => 5
            total   => 15 **calculation execution held here
            return => GEC return 
            ** now it's work over so it will be deleted then exit

it will return the total and will go to phase 3. EP of result2 now

result2 => so,
        new variable enviroment + execution thread created for result2
        now again MCP & EP will be created for addNumber

                  Mcp**

                    value1 => undefined 
                    value2 => undefined
                    total  => undefined

                   Ep**

                   num1    => 10
                   num     => 2
                   total   => 12 **calculation execution held here
                   return => GEC return 
                   ** now it's work over so it will be deleted then exit


 */


 /*                  *********** Call Stack

 LIFO lastIn firstOut

 global execution takes place first as usual then 1st function comes inside
 it executes then exits same with 2nd function 3rd and so on...

 but if in a single function multiple function involved to call then
 in this case who enter last he will take it fisrt exit then on the same 
 order of LIFO every function will be execute then exit             */