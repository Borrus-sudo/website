===============================================
Trumpet Winsock Version 3.0 for Win3.1x / Win95
===============================================

16/10/96

1) Introduction
2) Do not forsake the Help file!
3) Installing the Trumpet Winsock for the first time
  a) SLIP/PPP CHECKLIST
  b) Packet Driver CHECKLIST
4) Upgrading to Version 3.0
5) Trouble shooting
6) What does the installer do?
7) Version history
8) Help!!!!!


1) INTRODUCTION
   ============

Welcome to the Trumpet Winsock!

The Trumpet Winsock is a compact program that helps connect your computer
 to the Internet.  It allows programs (such as Netscape and Eudora) to talk to 
other programs (such as a Web or Postoffice server... maybe in another 
country) over the Internet.

When a Winsock application (such as Netscape or Eudora) needs to connect 
to the Internet it will look for a Winsock on your computer.  If it is 
installed and configured correctly, then the Trumpet Winsock will start (and 
automatically dial into your Internet Service Provider (ISP).

Trumpet Winsock simplifies the process of connecting your computer to
the Internet.  Although installing Trumpet Winsock may be a little 
complicated, you only need to do it once.  

To complement the Trumpet Winsock we have included several diagnostic Winsock 
applications (Ping, Hop, Dig and TCP Meter).  These applications are 
documented in the Winsock's Help file.


2) DO NOT FORSAKE THE HELP FILE!
   =============================

Trumpet Winsock Help contains lots of handy information about configuring the 
Trumpet Winsock and contacting Trumpet Software.  The Help file can be 
accessed directly from Windows or by selecting Contents from the Help menu in 
the Winsock.

Printable versions of Trumpet Winsock Help are available from:
     ftp://ftp.trumpet.com/winsock/docs/

For the latest information on all our products, check our Web site:
     http://www.trumpet.com.au/


3) INSTALLING THE TRUMPET WINSOCK FOR THE FIRST TIME
   =================================================

If you are using the Trumpet Winsock to dial into an Internet Provider then 
please work through the SLIP/PPP CHECKLIST.

If you are not using a modem, and instead need to use the Winsock over a 
network (such as Ethernet or Token Ring) then please work through the PACKET 
DRIVER CHECKLIST.

These checklists are intended to help you install the Trumpet Winsock quickly 
and easily.  If you encounter any difficulties, make sure you've read through 
the relevant sections of the Help file.


a) SLIP/PPP CHECKLIST
   ------------------

STEP ONE - Collect information

If you are going to use the Trumpet Winsock over a dial up modem connection 
(SLIP/PPP) then the following details will be needed...

Account details (important)

  Login phone number:
  Login username:
  Login password:
  SLIP, CSLIP, or PPP:
  If PPP, then is PAP or CHAP used?:
  If so - PPP username:
          PPP password:
  IP address (if fixed):
  DNS server:
  Domain suffix:

Server profile (if known)

  Username prompt:
  Password prompt:
  Command prompt:
  SLIP command:
  SLIP response:
  PPP command:
  PPP response:
  Scan for IP address:

Modem profile (if known)

  Modem speed:
  Comm port:
  Use reset string:
  Init string:
  Dial string:
  Hangup string:


STEP TWO - Using the Trumpet Winsock over SLIP/PPP

The Trumpet Winsock's Help file contains a section on using the Trumpet 
Winsock over SLIP/PPP.  As you read through it, check the sections...

[ ] Setting up the Winsock for SLIP/PPP
[ ] Logging in for the first time
  [ ] Try the sample login script
  [ ] See if your ISP has a preconfigured script
  [ ] Try logging in manually
[ ] Logging in manually
[ ] Configuring you profile
[ ] Example profiles
[ ] Configuring your login script


b) PACKET DRIVER CHECKLIST
   -----------------------

STEP ONE - Collect information

If you are going to use the Trumpet Winsock over a packet driver then the 
following details will be needed...

Packet driver

  Type of network driver (ODI, NDIS, packet driver):
  IP address (if fixed):
  DNS server:
  Domain suffix:
  Vector:
  Netmask:
  Gateway:


STEP TWO - Using the Trumpet Winsock over a packet driver 

The Trumpet Winsock's Help file contains a section on using the Trumpet 
Winsock over a packet driver.  As you read through it, check the sections...

[ ] Installing a packet driver and WINPKT
[ ] Installing an NDIS or ODI packet driver shim
[ ] Setting up the Winsock for a packet driver or shim


4) UPGRADING TO VERSION 3.0
   ========================

Upgrading from a correctly configured Trumpet Winsock should normally be quite 
an easy process.  However there are two areas that may cause some 
difficulties...

a) Updating your registration password

If you are upgrading from a registered version of the Trumpet Winsock earlier 
than 3.0 (eg 2.0A or 2.1F to 3.0) then you will need to update your 
registration password.  This will not be necessary if you are upgrading from a 
minor revision (eg 3.0C to 3.0D)

To automatically update your registration password over the Internet, use the 
"update registration" feature as follows:

  1. Either..
  Install Version 3.0 over a previously registered Trumpet Winsock.
     Or..
  Copy the trumpwsk.ini file from a previous registered Trumpet Winsock into 
  the same directory as Trumpet Winsock 3.0.

  2. Start the Trumpet Winsock Version 3.0 (and dial into you provider if 
     applicable).

  3. Select Update registration from the Special menu.

If you receive a "registration name not found" error message, then please 
contact our Registrations Department with details of how and when you 
originally registered.


b) Upgrading login scripts (only applies to dial-up SLIP/PPP users)

If your login and bye scripts have been configured correctly and work fine 
with an earlier version of the Winsock, they should still work fine under the 
new version.  (The only exception to this may be if your script logs in but 
returns "script aborted". 

If you are really keen to try then make sure you back up your originals first 
and then work through the SLIP/PPP CHECKLIST above.


5) TROUBLE SHOOTING
   ================

A complete list of frequently asked questions and error messages can be found 
in the Help file and on our Web site:
    http://www.trumpet.com.au/

If you're having and difficulties installing or configuring the Trumpet 
Winsock, please check these lists.  You could even try using the Help file's 
Search facility to look for a topic or question.

If you can't find the answers you're looking for, then please contact us (our 
contact details are listed in the Help file).  You can help us to help you by 
having the answers to the following questions ready.


a) General information and installation

Are you using a registered Trumpet Winsock?
If so;
  Registration name:
  Registration password:

What version of the Trumpet Winsock (eg 3.0D, 2.1F, etc)?
What version of Windows (eg Win3.1, Win3.11, Win95, WinNT)?

Did the installer seem to work successfully?

Is this the first time you've installed the Trumpet Winsock?
If not;
  Have you read UPGRADING TO VERSION 3.0?
  Has the problem only started since upgrading to Version 3.0?
  Has your Winsock's password been updated correctly?
  What version of the Trumpet Winsock are you upgrading *from*?

Are other Winsocks or TCP/IP stacks (eg Microsoft's DUN) installed?

Are any error messages displayed?


b) If over a modem;

  Have you read "Using the Trumpet Winsock over SLIP/PPP" in the Help file?
  Have you worked through the SLIP/PPP CHECKLIST?
  SLIP, CSLIP, or PPP?
  If PPP, then is PAP or CHAP used?:
  Are you logging in manually or automatically?
  If automatically;
    Does your login.cmd return "script completed" or "script aborted"?
  If the login is unsuccessful, how far does it get?


c) If packet driver;

  Have you read "Using the Trumpet Winsock over a packet driver" in the Help 
    file?
  Have you worked through the PACKET DRIVER CHECKLIST?
  What kind of network driver (eg NDIS, ODI, packet driver)?
  Is winpkt or ndis3pkt being used?
  Is winpkt (or ndis3pkt) loading correctly?


6) WHAT DOES THE INSTALLER DO?
   ===========================

i) The installer starts by searching for additional Winsocks and offers to 
rename any that it finds (eg winsock.dll and wsock32.dll).  In a 3.1
or 3.11 environment any wsock32.dll files will NOT be renamed to protect WIN32s
applications.

ii) Then the installer suggests a directory into which the Trumpet 
Winsock and Winsock Applications will be installed. 

To avoid multiple installations of the Trumpet Winsock, it searches for a 
directory containing tcpman.exe and suggests that.  

iii) If the directory you have okayed contains any setup files (ini files and 
scripts), it will ask you if you would like to retain them.  

iv) It then copies across only the files that have date stamps later than 
those in the destination directory.  This is to avoid reverting to an earlier 
version accidentally.  

If you wish to copy across all the files regardless, you will need to run the 
installer again and select a new directory.  

v) Program Items are created for each of the applications and utilities 
installed. 
 
vi) A modification to the path statement of your autoexec.bat file is 
suggested.  You may choose whether or not to save the new version of 
autoexec.bat. 

This modification allows other applications to "demand load" the Winsock.  
This means that other applications can load up the Winsock they need it.  For 
example, the Newsreader when it sends and receives email. 

vii) Finally, the machine is restarted if autoexec.bat has been modified. 


7) VERSION HISTORY 
   ===============

26/07/96  Trumpet Winsock Version 3.0 Revision A released.
16/10/96  Trumpet Winsock Version 3.0 Revision C released.
16/12/96  Trumpet Winsock Version 3.0 Revision D released.
 

8) HELP!!!!!
   =========

Please consult the online help file, Trumpet Winsock Help (trumpwsk.hlp), for 
a complete list of our contact details. 
 
If the installer hasn't even worked, then you can access the Help file 
directly from File Manager by double-clicking on trumpwsk.hlp. 
 
 

Trumpet Software International