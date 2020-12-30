from datetime import datetime, timedelta, time, date

def add_time(start, duration, dayName=""):
   
    # region parameters
    log=False;
    if(log):
      print("############### parameters ###############")
      print("start     :", start)
      print("duration  :", duration)
      print("dayName   :", dayName)
    if(dayName != ""):
        dayName = dayName.lower()
    if(log):
        print("############### parameters ###############")
        print("############### ############### ###############")
    # endregion

    hour_minute_for_add = duration.split(":")
    hourtoadd = int(hour_minute_for_add[0])
    minutetoadd = int(hour_minute_for_add[1])
    am_pm = start.split(" ")[1]
    oldtime = start.split(" ")[0]

    dayNames = ["monday", "tuesday", "wednesday",
                "thursday", "friday", "saturday", "sunday"]
    if(log):
        print("hourtoadd    :", hourtoadd)
        print("minutetoadd  :", minutetoadd)
        print("am_pm        :", am_pm)
        print("oldtime      :", oldtime)

    if(int(oldtime.split(":")[0]) < 10):
        oldtime = '0'+oldtime

    oldtime = time.fromisoformat(oldtime)
    if(log):
        print("oldtime is converted to time and oldtime is  ", oldtime)
    if(am_pm == "PM"):
        #oldTime = oldTime.add_time(12)
        if(log):
            print("PM change new time")
        oldtime = (datetime.combine(date.today(), oldtime) +
                   timedelta(hours=12)).time()
        if(log):                   
            print("old time wiht PM", oldtime)

    newDate = (datetime.combine(date.today(), oldtime) +
               timedelta(hours=hourtoadd, minutes=minutetoadd))
    if(log):
        print("newDate=>", newDate)
    newTime = newDate.time()
    dstr1 = datetime.combine(date.today(), oldtime)
    dstr2 = newDate
    if(log):
        print(dstr1)
        print(dstr2)
    # print(round(abs((dstr2 - dstr1).total_seconds()/3600)/24))

    dayDiff = abs((dstr2.date() - dstr1.date()).days)
    if(log):
        print("############### ############### ###############")
        print("newTime---------> ", newTime)
        print("dayDiff---------> ", dayDiff)

    dayDiffDesc = ""

    if(dayDiff == 1):
        dayDiffDesc = " (next day)"
    elif(dayDiff > 1):
        dayDiffDesc = " ("+str(dayDiff)+" days later)"

    newDayName = ""
    if(dayName != ""):
        oldDayNameIndex = dayNames.index(dayName)
        #print("oldDayNameIndex", oldDayNameIndex)
        newDayNameIndex = (oldDayNameIndex+dayDiff)
        #print("newDayNameIndex", newDayNameIndex)
        newDayNameIndex = newDayNameIndex % 7
        #print("newDayNameIndex", newDayNameIndex)
        newDayName = dayNames[newDayNameIndex].capitalize()
        #print("newDayName", newDayName)

    if(log):
        print("newDayName", newDayName)
    newDayNameDesc = ", " + newDayName if newDayName != "" else ""

    newTimeStr = '{0:%I:%M %p}'.format(dstr2)
    

    if(int(newTimeStr.split(":")[0]) < 10):
        newTimeStr = newTimeStr[1:]

    if(log):
        print("newTimeStr    :", newTimeStr+"--")
        print("newDayNameDesc:", newDayNameDesc+"--")
        print("dayDiffDesc   :", dayDiffDesc+"--")

    desc = newTimeStr + str(newDayNameDesc) + str(dayDiffDesc)
    if(log):
      print("--"+desc+"--")
       

    return desc

