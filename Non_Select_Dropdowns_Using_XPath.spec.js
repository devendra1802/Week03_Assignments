import test from "@playwright/test"

test("Handling Non-Select Dropdowns Using XPath", async({page})=>{


await page.goto("https://leafground.com/select.xhtml")
// Click the Country dropdown using XPath.
await page.locator("//label[@id='j_idt87:country_label']").click()
//  Identify the India option using XPath & Click/select India using XPath  
await page.locator("//li[@id='j_idt87:country_3']").click()









})