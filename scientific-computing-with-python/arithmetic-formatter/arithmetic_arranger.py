def arithmetic_arranger(problems, show_Result=False):
   #Check if List Elements > 5
  if len(problems) > 5:
    return 'Error: Too many problems.'

  line_A = ''; line_B = ''; line_C = ''; line_D = ''

  for i, problem in enumerate(problems):
    nbr1, oper, nbr2 = problem.split()
    len1, len2 = len(nbr1), len(nbr2)
    
    if not (oper == '+' or oper == '-'):
      return 'Error: Operator must be \'+\' or \'-\'.'
    if not (nbr1.isdigit() and nbr2.isdigit()):
      return 'Error: Numbers must only contain digits.'
    if len1 > 4 or len2 > 4:
      return 'Error: Numbers cannot be more than four digits.'

    len_Max = max(len1,len2)
    result = int(nbr1) + int(nbr2) if oper == '+' else int(nbr1) - int(nbr2)

    line_A = line_A + nbr1.rjust(len_Max+2) 
    line_B = line_B + oper + nbr2.rjust(len_Max+1) 
    line_C = line_C + ''.rjust(len_Max+2, '-') 
    line_D = line_D + str(result).rjust(len_Max+2) 

    if i < len(problems) - 1:
      line_A += '    '; line_B += '    '; line_C += '    '; line_D += '    '

    arranged_problems = line_A + '\n' + line_B + '\n' + line_C + '\n' + line_D if show_Result == True\
     else line_A + '\n' + line_B + '\n' + line_C
 
  return arranged_problems