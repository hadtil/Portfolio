# Approach 1
# from covid19_data import JHU

# print("The number of COVID-19 deaths in UK: " + str(JHU.UnitedKingdom.deaths))
# print("The number of COVID-19 confirmed in UK: " + str(JHU.UnitedKingdom.confirmed))
# print("The number of COVID-19 recovered in UK: " + str(JHU.UnitedKingdom.recovered))
# print("The number of COVID-19 deaths in UK: " + str(JHU.US.deaths))


# Approach 2
# import covid19_data as COVID

# total = COVID.dataByName("Total")
# India = COVID.dataByName("India")

# print("Total : " + str(total.cases))
# print("India : " + str(India.cases))

# print("Total : " + str(total.deaths))
# print("India : " + str(India.deaths))


# Approach 3
import covid19_data as COVID

total = COVID.jsonByName("Total")
India = COVID.jsonByName("India")

print("Total : " + str(total))
print("India : " + str(India))



