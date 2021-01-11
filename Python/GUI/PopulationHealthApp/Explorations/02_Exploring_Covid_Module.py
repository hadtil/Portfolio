from covid import Covid

# covid = Covid()

# print(covid.get_data())

# place = covid.list_countries()
# print(place)

# italy_cases = covid.get_status_by_country_name("Italy")
# print(italy_cases)

# active = covid.get_total_active_cases()
# print(active)

# Default data from John Hopkins
# Can change this to Worldometer

covid1 = Covid(source="worldometers")
confirmed1 = covid1.get_total_confirmed_cases()
print("Worldometers : " + str(confirmed1))

covid2 = Covid(source="john_hopkins")
confirmed2 = covid2.get_total_confirmed_cases()
print("John Hopkins : " + str(confirmed2))

