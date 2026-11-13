import test, { expect } from "@playwright/test"

test(" Edit Lead in LeafTaps Using XPath", async({page})=>{

await page.goto("https://leaftaps.com/opentaps/control/main")
await page.locator("//input[@id='username']").fill("Demosalesmanager")
await page.locator("//input[@id='password']").fill("crmsfa")
await page.locator("//input[@class='decorativeSubmit']").click()
await page.locator("//a[contains(text(),'CRM/SFA')]").click()
await page.locator("//a[text()='Leads']").click()
expect(page).toHaveURL("https://leaftaps.com/crmsfa/control/leadsMain")
await page.locator("//a[text()='Find Leads']").click()
expect(page).toHaveTitle("Find Leads | opentaps CRM")
await page.locator("//input[@name='id']").fill("10215")
//await page.locator("(//input[@name='firstName'])[3]").fill("James")
//await page.locator("(//input[@name='lastName'])[3]").fill("Davidson")
//await page.locator("(//input[@name='companyName'])[2]").fill("TestLeaf")
await page.locator("//button[text()='Find Leads']").click()
await page.locator("//a[text()='10215']").click()
expect(page).toHaveTitle("View Lead | opentaps CRM")
await page.locator("//a[text()='Edit']").click()
await page.locator("//input[@id='updateLeadForm_companyName']").fill("TestLeaf_Org")
await page.locator("//input[@id='updateLeadForm_firstName']").fill("Devendra")
await page.locator("//input[@id='updateLeadForm_lastName']").fill("Upadhyay")
await page.locator("//select[@id='updateLeadForm_industryEnumId']").selectOption({value:"IND_HARDWARE"})
await page.locator("//select[@id='updateLeadForm_industryEnumId']").selectOption({label:"Computer Software"})
await page.locator("//input[@name='submitButton' and @value='Update']").click()

//Verify updated field values:
let updatedFirstName = page.locator("//span[@id='viewLead_firstName_sp']")
await expect(updatedFirstName).toContainText("Devendra")

let updatedLastName = page.locator("//span[@id='viewLead_lastName_sp']")
await expect(updatedLastName).toContainText("Upadhyay")

let updatedCompanyName = page.locator("//span[@id='viewLead_companyName_sp']")
await expect(updatedCompanyName).toContainText("Upadhyay")

await page.waitForTimeout(5000);

})